<?php

class Age {
    private int $age;
    function __construct($age)
    {
        if ($age > 120 || $age < 0) {
            throw new Error('age fail');
        }

        $this->age = $age;
    }

    public function increment()
    {
        return new self(39);
    }
}

function register(Age $age) {
    return $age;
}

$age = new Age(36);
$age2 = $age->increment();
var_dump($age2);
var_dump(register($age));