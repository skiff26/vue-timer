---
outline: deep
---

# Introduction

Welcome to the documentation for precise timers and countdown timers, designed to ensure high accuracy and reliability in your web application. In this library, we provide tools that allow you to manage time-based tasks using `performance.now()` and `new Date` instead of the more common but less precise `setInterval` and `setTimeout`.

## Why Not Use `setInterval` and `setTimeout`

At first glance, `setInterval` and `setTimeout` may seem like attractive and convenient means for creating timers in your web application. They offer a straightforward way to execute functions at specified time intervals. However, there are several key reasons why using these functions may be undesirable:

### 1. Lack of Precision

`setInterval` and `setTimeout` do not guarantee precise execution of a task at a specific time. They rely on the browser's scheduling and can be delayed by other processes or events, resulting in imprecise outcomes. If your application requires high time precision, such inaccuracies may be unacceptable.

### 2. Time Drift

Using `setInterval` and `setTimeout` can lead to time drift. This means that over time, tasks may fall behind or advance ahead of the scheduled timeline due to execution inaccuracies. In applications where maintaining accurate time is critical, such drift can cause serious issues.

### 3. Limited Flexibility

`setInterval` and `setTimeout` offer limited flexibility in time management. They allow you to execute tasks at specific intervals but do not provide convenient mechanisms for scheduling precise future moments or accounting for variable conditions.

Our precise timers and countdown timers, working with `performance.now()` and `new Date`, help overcome these limitations and provide more reliable and accurate tools for time management in your application. In this documentation, we will explore how to use these tools to create precise and dependable timers.
