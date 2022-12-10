<?php

class Room 
{
    protected $id;
    protected $beds_number;
    protected $name;
    protected $kid_number;
    protected $service;
    protected $booked;
    protected $tour_id;
    protected $accommodation_id;

    public function __construct($beds_number=null, $name=null, $kid_number=null, $service=null, $booked=null, $tour_id=null, $accommodation_id=null)
    {
        $this->beds_number=$beds_number;
        $this->name=$name;
        $this->kid_number=$kid_number;
        $this->service=$service;
        $this->tour_id=$booked;
        $this->booked=$tour_id;
        $this->accommodation_id=$accommodation_id;
    }
}