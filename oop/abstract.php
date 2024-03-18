<?php

abstract class AchievementType {

    public function name() {
        $class =  (new ReflectionClass($this))->getShortName();

        return trim(preg_replace('/[A-Z]/', ' $0', $class));
    }

    public function icon() {
       return  strtolower(str_replace(' ', '-', $this->name()));
    }

    abstract function achievements($user);
}

class ThousandsPoints extends AchievementType {
    public function achievements($user) {
        return 'achievement';
    }
}

class Win extends AchievementType {
    public function achievements($user) {
        return 'achievement';
    }
}

$achievements = new Win();
echo $achievements->achievements();