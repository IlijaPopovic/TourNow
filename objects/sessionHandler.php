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
        return 1;//<-------------- gasenje provere sesija
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
        if (!$this->has('user')) die('no user');
    }

    public function checkOrganisation()
    {
        if (!$this->has('organisation')) die('no organisation');
    }

    public function checkAdmin()
    {
        if (!$this->has('admin')) die('no admin');
    }
}