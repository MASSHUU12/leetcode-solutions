#include <stdio.h>
#include <stdlib.h>

char *restoreString(char *s, int *indices, int n) {
  char *r = (char *)malloc((n + 1) * sizeof(char));

  for (int i = 0; i < n; ++i) {
    r[indices[i]] = s[i];
  }

  r[n] = '\0';
  return r;
}

int main(void) {
  int indices[] = {4, 5, 6, 7, 0, 2, 1, 3};
  char *output = restoreString("codeleet", indices, 8);

  printf("Actual: %s, expected: %s\n", output, "leetcode");

  free(output);
  return 0;
}
