use std::collections::HashSet;

const MORSE_CODES: [&str; 26] = [
    ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--",
    "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..",
];

struct Solution;

impl Solution {
    pub fn unique_morse_representations(words: Vec<String>) -> i32 {
        let mut transformations = HashSet::with_capacity(words.len());

        for word in words {
            let mut transformation = String::with_capacity(word.len() * 4); // Morse code is max 4 chars
            for ch in word.chars() {
                transformation.push_str(MORSE_CODES[(ch as usize) - ('a' as usize)]);
            }
            transformations.insert(transformation);
        }

        transformations.len() as i32
    }
}

fn main() {
    let words: Vec<String> = vec![
        "gin".to_string(),
        "zen".to_string(),
        "gig".to_string(),
        "msg".to_string(),
    ];

    println!("{}", Solution::unique_morse_representations(words));
}
