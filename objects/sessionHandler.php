<?php

class MySessionHandler
{
    public function __construct()
    {
        session_start();
    }

    public function set($key, $value)
    {
        $_SESSION[$key] = $value;
    }

    public function get($key)
    {
        return $_SESSION[$key] ?? null;
    }

    public function has($key)
    {
        //return 1;//<-------------- gasenje provere sesija
        return isset($_SESSION[$key]);
    }

    public function remove($key)
    {
        if ($this->has($key)) {
            unset($_SESSION[$key]);
        }
    }

    public function destroy()
    {
        session_unset();
        session_destroy();
    }
    
    public function checkClient()
    {
        if (!$this->has('user'))
        {
            return array("id" => "no");
            die('no user');
        } 
        else
        {
            return array("id" => $this->get('user'));
        }
    }

    public function checkOrganisation()
    {
        if (!$this->has('organisation'))
        {
            return array("id" => "no");
            die('no organisation');
        } 
        else
        {
            return array("id" => $this->get('organisation'));
        }
    }

    public function checkAdmin()
    {
        if (!$this->has('admin'))
        {
            return array("id" => "no");
            die('no admin');
        } 
        else
        {
            return array("id" => $this->get('admin'));
        }
    }
}