# to remove punctuation and spaces in Ruby, and make lowercase:
# downcase.gsub(/[^a-z ]/, "").gsub(/\s+/, "")

def anagram(strA, strB)
    # helper method to map characters of string to a hash
    def char_map(string)
         map_ch = {}
         string.each_char do |char|
             if !!map_ch[char]
                 map_ch[char] = map_ch[char] + 1
             else 
                 map_ch[char] = 1
             end
         end
         return map_ch
       end 

     newA = strA.downcase.gsub(/[^a-z ]/, "").gsub(/\s+/, "")
     newB = strB.downcase.gsub(/[^a-z ]/, "").gsub(/\s+/, "")
     mapA = char_map(newA)
     mapB = char_map(newB)

     return false if mapA.size != mapB.size
 
     mapA.each_key do |key| 
         return false if mapA[key] != mapB[key] 
     end
    return true
 end