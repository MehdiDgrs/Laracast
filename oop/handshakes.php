<?php

interface Newsletter {
    public function subscribe($email);
}

class CampaignMonitor implements Newsletter {
    public function subscribe($email) {
        die('subscribing with monitor');

    }
}

class Drip implements Newsletter {
    public function subscribe($email) {
        die('subscribing with drip');
    }
    public function test($test) {
        die('test');
    }
}
class NewsletterSubscribeController {
    public function store(Newsletter $newsletter) {
        $email = 'mehdi@gmail.com';

        return $newsletter->subscribe($email);
    }
}

$controller = new NewsletterSubscribeController();
echo $controller->store(new CampaignMonitor());