<?php

class CoffeeMaker {

    public function brew()
    {
        print 'brew';
    }
}

class SpecificCoffeeMaker extends CoffeeMaker {

    public function latteMaking() {
        print 'latte ';
    }
}

class Collection {

    private array $items = [];
    function __construct(array $items)
    {
        $this->items = $items;
    }

    public function sum($key): float|int
    {
       return  array_sum(array_column($this->items, 'length'));
    }
}

class VideoCollection extends Collection
{
    public function length() {
        return $this->sum('length');
    }
}
class Video {
    private string $name;
    public int $length;

    function __construct($name, $length)
    {
        $this->name = $name;
        $this->length = $length;
    }
}

$video = new VideoCollection([
    new Video('first', 100),
    new Video('first', 500),
    new Video('first', 600),
]);

var_dump($video->length());