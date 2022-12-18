<?php

require 'table.php';
require 'traits/open.php';

class User extends Table
{
    use open;
    protected $id;
    protected $name;
    protected $surname;
    protected $identity_number;
    protected $country;
    protected $address;
    protected $mail;
    protected $password;
    protected $mobile_number;
    protected $image;

    public function __construct($name=null, $surname=null, $identity_number=null, $country=null, $mail=null, $address=null, $password=null, $mobile_number=null, $image=null)
    {
        $this->name=$name;
        $this->surname=$surname;
        $this->identity_number=$identity_number;
        $this->country=$country;
        $this->mail=$mail;
        $this->address=$address;
        $this->password=$password;
        $this->mobile_number=$mobile_number;
        $this->image=$image;
    }

    public function insertUser():array
    {
        $query = <<<EOD
                INSERT INTO `user` (`id`, `name`, `surname`, `identity_number`, `country`, `address`, `mail`, `password`, `mobile_number`, `image`)
                VALUES (NULL, :name, :surname, :identity_number, :country, :address, :mail, :password, :mobile_number, :image);
                EOD;
        $params = ['name', 'surname', 'identity_number', 'country', 'address', 'mail', 'password', 'mobile_number', 'image'];
        return parent::insert($query, $params);
    }

    public function deleteUser():array
    {
        $query = <<<EOD
                DELETE FROM `user` WHERE `user`.`id` = :id
                EOD;
        $params = ['id'];
        return parent::delete($query, $params);
    }

    public function selectUser():array
    {
        $query = <<<EOD
                SELECT * FROM `user` WHERE `user`.`id` = :id
                EOD;
        $params = ['id'];
        return parent::select($query, $params);
    }

    public function updateUser():array
    {
        $query = <<<EOD
                UPDATE `user` 
                SET `name` = :name, `surname` = :surname, `identity_number` = :identity_number, `country` = :country, `address` = :address, `mail` = :mail, `password` = :pawwsord, `mobile_number` = :mobile_number, `image` = :image
                WHERE `user`.`id` = :id;
                EOD;
        $params = ['id', 'name', 'surname', 'identity_number', 'country', 'address', 'mail', 'password', 'mobile_number', 'image', 'created'];
        return parent::update($query, $params);
    }
}