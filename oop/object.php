<?php

class Team {

    protected $name;

    public $members = [];

    function __construct($name, $members)
    {
        $this->name = $name;
        $this->members = $members;
    }

    public static function create(...$params) {
        return new static(...$params);
    }

    public function members() {
        return $this->members;
    }

    public function add($member) {
        $this->members[] = $member;
    }

}

$karmine = Team::create('karmine',['john', 'kate']);

var_dump($karmine);