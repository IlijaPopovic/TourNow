<?php

class Tour 
{
    protected $connection;
    protected $id;
    protected $name;
    protected $date_start;
    protected $date_end;
    protected $description;
    protected $max_people;
    protected $type;
    protected $price;
    protected $enabled;
    protected $organisation_id;
    protected $location_id;

    public function __construct($name=null, $date_start=null, $date_end=null, $description=null, $max_people=null, $type=null, $price, $enabled=null, $organisation_id=null, $location_id=null)
    {
        $this->name=$name;
        $this->date_start=$date_start;
        $this->date_end=$date_end;
        $this->description=$description;
        $this->max_people=$max_people;
        $this->type=$type;
        $this->price = $price;
        $this->enabled = $enabled;
        $this->organisation_id=$organisation_id;
        $this->location_id=$location_id;
    }

    public function getTour()
    {
        $query = <<<EOD
                Example of string
                spanning multiple lines
                using heredoc syntax.
                EOD;
        $query_solution = $this->connection->prepare($query);
        $query_solution->execute();
        $array = $query_solution->fetchAll(PDO::FETCH_ASSOC);
        return $array;
    }
}