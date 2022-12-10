<?php

class Comment 
{
    protected $id;
    protected $grade;
    protected $opinion;

    public function __construct($grade=null, $opinion=null)
    {
        $this->grade=$grade;
        $this->opinion=$opinion;
    }
}