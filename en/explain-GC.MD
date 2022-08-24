# When do objects become Garbage Collected?
---
## actually objects mainly become garbage collected when the object has no reference or becomes unreachable

# What is reachable objects?

## let's consider the following code

```js
    const user = {
        name: "youssef"
    }
```

## here in this code, there's user object that depicts and refer to the name, so now this object isn't garbage collected for two reasons

## 1. the object has a reference! which is make this object in memory becuase memory always needs a reference to the primitives types to be known in the memory

## 2. the object and the name property are reachable!

# what'll happen in case have overwritten the user to null?

## it's something obvious, will lose its reference then the name that user refer to become unreachable, so the main two reasons that make and primitives stay in memory are gone! so JavaScript Engine Will automatically garbage them! 

# Let's take another example
---

## let's consider the following code

```js
    const user = {
        name: "youssef"
    }

    const admin = user
```

## now we have the same user object but we've assigned this object reference to the admin, so when we have overwritten the user to null, the admin will have no reference and become unreachable, then JavaScript Engine Will garbage the admin 