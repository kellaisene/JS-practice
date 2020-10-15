/**
 * You are writing a password validator for a website. You want to discourage users from using their username as part of their password, or vice-versa, because it is insecure. Since it is unreasonable to simply not allow them to have any letters in common, you come up with this rule:

For any password and username pair, the length of the longest common substring should be less than half the length of the shortest of the two.

In other words, you won't allow users to have half their password repeated in their username, or half their username repeated in their password.

Write a function validate(username, password) which returns true if your rule is followed, false otherwise.

Assume:

Both the username and the password may contain uppercase letters, lowercase letters, numbers, spaces, and the following special/punctation characters: !@#$%^&*()_+{}:"<>?[];',.
The username and password will each be less than 100 characters.
 */

function validate(username, password) {
    //your code here
    if (username.length > password.length) return validate(password, username);
    let x = 0;
    for (let i = 0; i + x < username.length; i++)
        for (let j = i + 1; j <= username.length; j++)
            if (password.includes(username.slice(i, j)))
                x = Math.max(x, j - i);
    return x * 2 < username.length;
}

// Best Practice

const validate = (username, password) => {
    const half = Math.ceil(Math.min(username.length, password.length) / 2);
    for (let i = 0; i <= password.length - half; i++) {
        if (username.includes(password.substr(i, half))) return false;
    }
    return true;
};

// OR

function validate(username, password) {
    var shortest = (username.length < password.length) ? username : password;
    var sequ = Math.ceil(shortest.length / 2);
    for (i = 0; i <= (username.length - sequ); i++) {
        var n = password.indexOf(username.slice(i, i + sequ))
        if (n > -1) {
            break;
        }
    }
    var result = (n > -1) ? false : true;
    return result;
}