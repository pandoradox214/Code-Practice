
#include <iostream>
using namespace std;

int main()
{
    char pattern[4][8];

    for (int row = 0; row < 4; row++) {
        for (int col = 0; col < 8; col++) {
            if ((row % 2 == 0 && col % 2 == 0) || (row % 2 != 0 && col % 2 != 0)) {
                pattern[row][col] = 'X';
                cout << pattern[row][col];
            }
            else {
                pattern[row][col] = 'O';
                cout << pattern[row][col];
            }
        }
        cout << '\n';
    }
}





