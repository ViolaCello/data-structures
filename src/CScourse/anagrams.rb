# to remove punctuation and spaces in Ruby, and make lowercase:
# downcase.gsub(/[^a-z ]/, "").gsub(/\s+/, "")

def anagram(strA, strB)
    newA = strA.downcase.gsub(/[^a-z ]/, "").gsub(/\s+/, "")
    newB = strB.downcase.gsub(/[^a-z ]/, "").gsub(/\s+/, "")
    mapA = char_map(newA)
    mapB = char_map(newB)
    
    def char_map(string)
        map = {}
        string.each_char do |char|
            if !!map[char]
                map[char] = map[char] + 1
            else 
                map[char] = 1
            end
        end
    end
end