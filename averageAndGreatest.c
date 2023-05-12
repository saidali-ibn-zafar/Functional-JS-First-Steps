#include <stdio.h>

int main() {
    int num;
    float average;
    int greatest = 0;
    int sum = 0;

    printf("Enter three integers:\n");

    for (int i = 0; i < 3; i++) {
        printf("Enter #%d: ", i + 1);
        scanf("%d", &num);
        sum += num;
 
        if (num > greatest) {
            greatest = num;
        }
    }

    average = sum / 3.0;

    printf("Average is: %.2f\n", average);
    printf("Greatest is: %d\n", greatest);

    return 0;
}
