<?php

require 'traits/open.php';

class Accommodation
{
    use Open;
    protected $id;
    protected $name;
    protected $start;
    protected $picture;
    protected $about;
    protected $enabled;

    public function __construct($name=null, $start=null, $picture=null, $about=null, $enabled=null)
    {
        $this->name=$name;
        $this->start=$start;
        $this->picture=$picture;
        $this->about=$about;
        $this->enabled=$enabled;
    }
}

$a = new Accommodation();

echo $a->about;