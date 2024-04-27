package main

import 
    "fmt"

func main() {
    var a [5]int
    fmt.Println("emp", a)

    a[4] = 100
    fmt.Println("set:", a)
    fmt.Println("get:", a[4])

    fmt.Println("len:", len(a))

    b := [5]int{1, 2, 3, 4, 5}
    fmt.Println("dcl:", b)

    c := [...]int{1, 2, 3, 4, 5, 6, 7, 8, 9, 0}
    fmt.Println("len:", len(c))

    d := [...]int{100, 3: 400, 500}
    fmt.Println("idx:", d)

    }

