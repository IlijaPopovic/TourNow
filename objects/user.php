<?php

require_once 'table.php';
require_once 'traits/open.php';

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

    public function __construct($id = null, $name=null, $surname=null, $identity_number=null, $country=null,  $address=null,$mail=null, $password=null, $mobile_number=null, $image=null)
    {
        $this->id = $id;
        $this->name=$name;
        $this->surname=$surname;
        $this->identity_number=$identity_number;
        $this->country=$country;
        $this->address=$address;
        $this->mail=$mail;
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

    public function checkIfUserExists()
    {
        $query = <<<EOD
                SELECT * FROM `user` WHERE `user`.`mail` = :mail AND `user`.`password` = :password AND `user`.`verified` = 1
                EOD;
        $params = ['mail','password'];
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

    public function updateUserPassword():array
    {
        $query = <<<EOD
                UPDATE `user` 
                SET `password` = :password
                WHERE `user`.`mail` = :mail;
                EOD;
        $params = ['mail','password'];
        return parent::update($query, $params);
    }

    public function updateUserVerification():array
    {
        $query = <<<EOD
                UPDATE `user` SET `verified` = '1' WHERE `user`.`id` = :id;
                EOD;
        $params = ['id'];
        return parent::update($query, $params);
    }
}