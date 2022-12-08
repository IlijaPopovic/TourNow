<?php

class Comment 
{
    private $id;
    private $grade;
    private $opinion;

    public function __construct($grade=null, $opinion=null)
    {
        $this->grade=$grade;
        $this->opinion=$opinion;
    }
}