#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void intToBinary(int num, char *binary_str, const size_t size) {
  binary_str[size - 1] = '\0';
  for (int i = size - 2; i >= 0; --i) {
    binary_str[i] = (num & 1) ? '1' : '0';
    num >>= 1;
  }
}

void removeLeadingZeroes(char *str) {
  const size_t len = strlen(str);
  size_t start = 0;
  while (start < len && str[start] == '0') {
    start++;
  }
  if (start == len) {
    str[0] = '0';
    str[1] = '\0';
  } else {
    memmove(str, str + start, len - start + 1);
  }
}

char *convertDateToBinary(const char *date) {
  const int y = atoi(date), m = atoi(&date[5]), d = atoi(&date[8]);
  char *yb = (char *)malloc(13 * sizeof(char)),
       *mb = (char *)malloc(5 * sizeof(char)),
       *db = (char *)malloc(7 * sizeof(char));

  intToBinary(y, yb, 13);
  intToBinary(m, mb, 5);
  intToBinary(d, db, 7);

  removeLeadingZeroes(yb);
  removeLeadingZeroes(mb);
  removeLeadingZeroes(db);

  char *output = (char *)malloc(strlen(yb) + strlen(mb) + strlen(db) + 3);
  sprintf(output, "%s-%s-%s", yb, mb, db);

  free(yb);
  free(mb);
  free(db);

  return output;
}

int main(void) {
  char *t1 = convertDateToBinary("2080-02-29"),
       *t2 = convertDateToBinary("1900-01-01"),
       *t3 = convertDateToBinary("2100-12-31");

  printf("Actual: %s, expected: 100000100000-10-11101\nActual: %s, expected: "
         "11101101100-1-1\nActual: %s, expected: 100000110100-1100-11111\n",
         t1, t2, t3);

  free(t1);
  free(t2);

  return 0;
}
