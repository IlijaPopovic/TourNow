<?php

require 'traits/open.php';
require 'table.php';

class Accommodation extends Table
{
    use Open;

    protected $id;
    protected $name;
    protected $stars;
    protected $picture;
    protected $about;
    protected $enabled;

    public function __construct($name=null, $stars=null, $picture=null, $about=null, $enabled=null)
    {
        $this->name = $name;
        $this->stars = $stars;
        $this->picture = $picture;
        $this->about = $about;
        $this->enabled = $enabled;
    }
}



// require '../config/database.php';

// $db = new Database();
// $a = new Accommodation('ilija','1','nekaslika','ja sam ilija',true);
// $a->setConnection($db->getConnection());

// $query = <<<EOD
// INSERT INTO `accommodation` (`id`, `name`, `stars`, `picture`, `about`, `enabled`) 
// VALUES (NULL, :name, :stars, :picture, :about, :enabled);
// EOD;
// $params = ['name','stars','picture','about','enabled'];
// var_dump($a->insert($query, $params));

