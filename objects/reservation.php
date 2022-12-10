<?php

class Reservation 
{
    protected $id;
    protected $checked;
    protected $tour_group;
    protected $user_id;
    protected $tour_id;

    public function __construct($checked=null, $tour_group=null, $user_id=null, $tour_id=null)
    {
        $this->checked=$checked;
        $this->tour_group=$tour_group;
        $this->user_id=$user_id;
        $this->tour_id=$tour_id;
    }
}