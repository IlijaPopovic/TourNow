<?php

class Destination 
{
    protected $id;
    protected $name;
    protected $coordinates;
    protected $country;

    public function __construct($name=null, $coordinates=null, $country=null)
    {
        $this->name=$name;
        $this->coordinates=$coordinates;
        $this->country=$country;
    }
}