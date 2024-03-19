<?php

class TeamException extends Exception {
    public static function FromTooManyMembers(): static
    {
        return new static(' Too many users');
    }
}

class Team {
    protected array $members = [];

    public function add(User $user)
    {

        if (count($this->members) === 3 ) {
            throw TeamException::FromTooManyMembers();
        }

        $this->members[] = $user;
    }

    public function getMembers()
    {
        return $this->members;
    }
}

class User
{
    public $name;

    function __construct($name)
    {
        $this->name = $name;
    }
}

class TeamMemberController {
    public function store() {

        $team = new Team;

        try {
            $team->add(new User('Jahn'));
            $team->add(new User('Jahn'));
            $team->add(new User('Jehn'));
            $team->add(new User('Jehn'));
        }
        catch(MaximumMembersException $e) {
            var_dump($e);
        }
}
}

(new TeamMemberController())->store();
