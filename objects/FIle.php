<?php

class File
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

        return ['status' => 'uploaded', 'fileName' => $fileNameNew];;
    }
}
