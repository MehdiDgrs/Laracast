<?php

class Subscription {
    private $gateway;
    public function __construct(Gateway $gateway)
    {
        $this->gateway = $gateway;
    }
    public function create()
    {
        $this->gateway->findUser();
    }

    public function delete()
    {

    }

    public function switch()
    {

    }
}

interface Gateway {
    public function findUser();
}

class StripeGateway implements Gateway {
    public function findUser() {
        echo 'hi';
    }
}

$subscription = new Subscription(new StripeGateway());
$subscription->create();