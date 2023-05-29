SELECT a.name AS 'Employee'
FROM Employee AS a
JOIN Employee AS b ON a.managerID = b.id
WHERE a.salary > b.salary;
