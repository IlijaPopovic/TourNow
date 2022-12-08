<?php

class Organization 
{
    private $id;
    private $name;
    private $mail;
    private $password;
    private $image;
    private $about;
    private $enabled;

    public function __construct($name=null, $mail=null, $password=null, $image=null, $about=null, $enabled=null)
    {
        $this->name=$name;
        $this->mail=$mail;
        $this->password=$password;
        $this->image=$image;
        $this->enabled=$about;
        $this->about=$enabled;
    }
}