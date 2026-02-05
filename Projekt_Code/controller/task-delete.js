const taskApiBaseUrl = "api/tasks.php";

const parseJsonSafely = async (response) => {
    const contentType = response.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
        return { isJson: false, data: null };
    }

    try {
        const data = await response.json();
        return { isJson: true, data };
    } catch (error) {
        return { isJson: true, data: null };
    }
};

const requestTaskDelete = async (url) => {
    const response = await fetch(url, { method: "DELETE" });
    const parsed = await parseJsonSafely(response);
    return { response, ...parsed };
};

const deleteTaskById = async (taskId) => {
    if (!taskId) {
        throw new Error("Task-ID fehlt.");
    }

    const encodedId = encodeURIComponent(taskId);
    const pathUrl = `${taskApiBaseUrl}/${encodedId}`;
    const queryUrl = `${taskApiBaseUrl}?id=${encodedId}`;

    let { response, isJson, data } = await requestTaskDelete(pathUrl);

    if (!response.ok && !isJson) {
        ({ response, isJson, data } = await requestTaskDelete(queryUrl));
    }

    if (!response.ok) {
        const message = data && data.error ? data.error : "Task konnte nicht geloescht werden.";
        throw new Error(message);
    }

    return data;
};

window.deleteTaskById = deleteTaskById;
