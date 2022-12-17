# 191. Number of 1 Bits [![share]](https://leetcode.com/problems/number-of-1-bits/)

![][easy]

## Problem Statement:

Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the `Hamming weight`).

Note:

- Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
- In Java, the compiler represents the signed integers using `2's complement notation`. Therefore, in **Example 3**, the input represents the signed integer. `-3`.

### Example 1:

```
Input: n = 00000000000000000000000000001011
Output: 3
Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.
```

### Example 2:

```
Input: n = 00000000000000000000000010000000
Output: 1
Explanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.
```

### Example 3:

```
Input: n = 11111111111111111111111111111101
Output: 31
Explanation: The input binary string 11111111111111111111111111111101 has a total of thirty one '1' bits.
```

### Constraints:

- The input must be a **binary string** of length `32`.

**Follow up:** If this function is called many times, how would you optimize it?

## Solution:

::: code-group

```java
public int hammingWeight(int n) {
  int count = 0,
      mask = 1;
  for (int i = 0; i < 32; i++) {
    if ((n & mask) != 0)
      count++;
    mask <<= 1;
  }
  return count;
}
```

:::

### [_..._](#)

```

```

<!----------------------------------{ link }--------------------------------->

[share]: https://img.icons8.com/external-anggara-blue-anggara-putra/20/000000/external-share-user-interface-basic-anggara-blue-anggara-putra-2.png
[easy]: https://img.shields.io/badge/Difficulty-Easy-bright.svg
[medium]: https://img.shields.io/badge/Difficulty-Medium-yellow.svg
[hard]: https://img.shields.io/badge/Difficulty-Hard-red.svg
