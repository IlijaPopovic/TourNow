<?php

require_once 'table.php';
require_once 'traits/open.php';

class Admin extends Table
{
    use open;
    protected $id;
    protected $name;
    protected $password;

    public function __construct($id = null, $name=null, $password=null)
    {
        $this->id = $id;
        $this->name=$name;
        $this->password=$password;
    }

    public function checkIfAdminExists()
    {
        $query = <<<EOD
                SELECT * FROM `admin` WHERE `admin`.`name` = :name AND `admin`.`password` = :password;
                EOD;
        $params = ['name','password'];
        return parent::select($query, $params);
    }

}