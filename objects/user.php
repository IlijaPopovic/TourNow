<?php

class Organization 
{
    protected $id;
    protected $name;
    protected $mail;
    protected $password;
    protected $image;
    protected $about;
    protected $enabled;

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