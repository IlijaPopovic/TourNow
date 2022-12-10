<?php

class Transport 
{
    protected $id;
    protected $name;
    protected $type;
    protected $start;
    protected $end;
    protected $tour_id;

    public function __construct($name=null, $type=null, $start=null, $end=null, $tour_id=null)
    {
        $this->name=$name;
        $this->type=$type;
        $this->start=$start;
        $this->end=$end;
        $this->enabled=$tour_id;
    }
}