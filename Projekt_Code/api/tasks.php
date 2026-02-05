<?php
header("Content-Type: application/json; charset=utf-8");

$method = $_SERVER["REQUEST_METHOD"] ?? "GET";
$dataFile = __DIR__ . "/../data/tasks.json";

const ERROR_MISSING_ID = "Task-ID fehlt.";
const ERROR_NOT_FOUND = "Task nicht gefunden.";
const ERROR_INVALID_METHOD = "Method not allowed.";

const DEFAULT_TASKS = [
    ["id" => "task-1", "title" => "Ersten Task erledigen"],
    ["id" => "task-2", "title" => "Zweiten Task pruefen"],
    ["id" => "task-3", "title" => "Dritten Task abschliessen"],
];

const DEFAULT_JSON_FLAGS = JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES;

function respondWithError(int $statusCode, string $message): void
{
    http_response_code($statusCode);
    echo json_encode(["error" => $message], DEFAULT_JSON_FLAGS);
    exit;
}

function ensureDataDirectory(string $filePath): void
{
    $directory = dirname($filePath);
    if (!is_dir($directory)) {
        mkdir($directory, 0775, true);
    }
}

function loadTasks(string $filePath): array
{
    if (!file_exists($filePath)) {
        return DEFAULT_TASKS;
    }

    $contents = file_get_contents($filePath);
    $data = json_decode($contents, true);

    return is_array($data) ? $data : [];
}

function saveTasks(string $filePath, array $tasks): void
{
    ensureDataDirectory($filePath);
    $payload = json_encode(array_values($tasks), DEFAULT_JSON_FLAGS);
    file_put_contents($filePath, $payload, LOCK_EX);
}

function getTaskId(): ?string
{
    if (!empty($_GET["id"])) {
        return (string)$_GET["id"];
    }

    $pathInfo = $_SERVER["PATH_INFO"] ?? "";
    if ($pathInfo !== "") {
        $segments = explode("/", trim($pathInfo, "/"));
        if (!empty($segments[0])) {
            return (string)$segments[0];
        }
    }

    return null;
}

if ($method === "GET") {
    $tasks = loadTasks($dataFile);
    echo json_encode(["tasks" => $tasks], DEFAULT_JSON_FLAGS);
    exit;
}

if ($method === "DELETE") {
    $taskId = getTaskId();
    if ($taskId === null || $taskId === "") {
        respondWithError(400, ERROR_MISSING_ID);
    }

    $tasks = loadTasks($dataFile);
    $taskIndex = null;

    foreach ($tasks as $index => $task) {
        if (isset($task["id"]) && (string)$task["id"] === (string)$taskId) {
            $taskIndex = $index;
            break;
        }
    }

    if ($taskIndex === null) {
        respondWithError(404, ERROR_NOT_FOUND);
    }

    array_splice($tasks, $taskIndex, 1);
    saveTasks($dataFile, $tasks);

    echo json_encode(["deletedId" => $taskId, "tasks" => $tasks], DEFAULT_JSON_FLAGS);
    exit;
}

respondWithError(405, ERROR_INVALID_METHOD);
