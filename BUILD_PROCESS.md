# Build Process

## How I Started

Upon reading and analyzing the task, and even asking to chatgpt and various ai tools I received many ecision Companion Systems that can be made. Then I thought of some problems that I face currently. Or some problems that I expect some Decision Companion Systems could have existed.

Choosing between multiple job offers is a complex real-world decision involving multiple competing criteria such as salary, stability, location, growth opportunities, work-life balance etc.
This is such a kind of problem students or young professionals face during their carrer starting phase. Which releates to me a lot now rather than any other problem.


## Evolution of Thinking

Started with:
Simple comparison logic: 
First idea was to compare various factors of job that defines to each individuals differently. Basically an yes or no approch. But I knew from there(starting) itself that was not enough.

Moved to:
Weighted decision approach:
here i mae sure that Not everything matters equally. Importance was assigned and Trade-offs were acknowledged. Then on i found that Decisions became smarter.

Finally:
Priority-driven model
It was no longer about weight alone about order of significance. later found out priority can stil be fixed. And i made the factor imputs in order of the priority.

And arrrived on an equation.

## Score=∑(Rating×Priority)


## Refactoring Decisions

- Replaced fixed factors with dynamic input
- Removed manual weighting → used priority order
- Added editable matrix


## Mistakes & Corrections

Mistake:
Treating best job as object → caused [object Object]

Fix:
Returned clean string from backend

Mistake:
No validation initially

Fix:
Added rating and duplication checks

Mistake:
No Input Validation
Eg:
Ratings like 0, -3, 25 could break scoring logic
Duplicate factors could distort weight distribution

Fix:
Added Boundary Validation
    Rating must be between 1–10
Logic introduced:
    if rating < 1 or rating > 10:
    show error

Mistake:
Re-entry of Job Factors:
Users could re-enter the same job factor again.

Fix:
if newFactor in selectedFactors:
    reject input
else:
    add to selectedFactors

✔ each factor contributes only once
✔ weight model remains stable

Mistake :
Output Rendering Confusion:
where is my result list rendering in my script?

Fix:
score calculation
↓
sorting
↓
final recommendation list generation
↓
display layer

So output moved from:
implicit calculation
to
explicit render stage

Mistake:
Unbounded Decision Model
Early system relied on:
Flat comparison
This caused:
sensitivity to scale differences
no prioritisation impact
poor realism

Fix:
I evolved system into:
Weighted Model
Then into:
Priority Model


---

## What Changed During Development

Added:

- Dynamic factors
- Matrix editing
- Validation
- Recommendation explanation

Reason:
Improve usability & decision clarity