<?php

class Table
{
    protected $connection;

    public function setConnection($connection)
    {
        $this->connection = $connection;
    }

    private function bindParameters($parameters):array
    {
        $bindedValues = [];
        foreach($parameters as $parameter)
        {
            if(property_exists($this,$parameter))
                $bindedValues[":$parameter"] = $this->$parameter;
        }
        return $bindedValues;
    }

    public function select(string $query, array $parameters):array
    {
        $query_solution = $this->connection->prepare($query);
        $query_solution->execute($this->bindParameters($parameters));
        $array = $query_solution->fetchAll(PDO::FETCH_ASSOC);
        return $array;
    }

    public function insert(string $query, array $parameters):array
    {
        try
        {
            $query_solution = $this->connection->prepare($query);
            $query_solution->execute($this->bindParameters($parameters));
        }
        catch (PDOException $e) 
        {
            return ['status' => $e->getMessage()];
        }
        return ['status' => 'inserted'];
    }

    public function delete(string $query, array $parameters):array
    {
        try
        {
            $query_solution = $this->connection->prepare($query);
            $query_solution->execute($this->bindParameters($parameters));
        }
        catch (PDOException $e) 
        {
            return ['status' => $e->getMessage()];
        }
        return ['status' => 'deleted'];
    }
}
