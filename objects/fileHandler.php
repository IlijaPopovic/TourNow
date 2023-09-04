<?php

class FileHandler
{
    public $maxSize = 5000000;
    public $allowedExt = ['jpg', 'jpeg', 'png'];

    function uploadFile($file):array
    {
        if ($file["error"] > 0) return ['status' => 'error'];
        if ($file["name"] == '') return ['status' => 'no name'];

        $tmp = explode('.', $file["name"]);
        $fileExtension = end($tmp);
        
        if (!in_array($fileExtension, $this->allowedExt)) return ['status' => 'bad extension'];
        if ($file["size"] > $this->maxSize) return ['status' => 'too large'];

        $fileNameNew = uniqid('', true) . "." . $fileExtension;
        $fileDestination = 'images/' . $fileNameNew;
        move_uploaded_file($file['tmp_name'], $fileDestination);

        return ['status' => 'uploaded', 'fileName' => $fileDestination];;
    }

    function uploadFiles($file):array
    {
        $filesArray = [];

        for($i = 0; $i < count($file['name']); $i++)
        {
            if ($file["error"][$i] > 0) return ['status' => 'error'];
            if ($file["name"][$i] == '') return ['status' => 'no name'];

            $tmp = explode('.', $file["name"][$i]);
            $fileExtension = end($tmp);

            if (!in_array($fileExtension, $this->allowedExt)) return ['status' => 'bad extension'];
            if ($file["size"][$i] > $this->maxSize) return ['status' => 'too large'];
        }

        for($i = 0; $i < count($file['name']); $i++)
        {
            $fileNameNew = uniqid('', true) . "." . $fileExtension;
            $fileDestination = 'images/' . $fileNameNew;
            move_uploaded_file($file['tmp_name'][$i], $fileDestination);

            $filesArray []= $fileDestination;
        }

        return ['status' => 'uploaded', 'fileName' => $filesArray];;
    }

    function deleteFile($filePath): array
    {
        if (file_exists($filePath) && is_file($filePath)) {
            unlink($filePath);
            return ['status' => 'deleted'];
        } else {
            return ['status' => 'file not found'];
        }
    }
}
