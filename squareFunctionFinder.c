#include <stdio.h>
#include <math.h>

int main() {
    int a, b, c;
    float x, y;

    printf("Enter the values of a, b, and c:\n");
    scanf("%d %d %d", &a, &b, &c);

    printf("Enter the value of x:\n");
    scanf("%f", &x);

    y = a * pow(x, 2) + b * x + c;

    printf("The value of the square function y = %.2f\n", y);

    return 0;
}
