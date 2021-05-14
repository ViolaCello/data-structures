class HashTable
    attr_accessor :hash

    def initialize(size = 53)
        @hash = Array.new(size)
    end



    # def hash(key, arr_length)
    #     total = 0
    #     static_prime = 31
    #     i = 0
    #     while i < [key.length, 100].min
    #         char = key[i]
    #         value = char.ord - 96
    #         total = (total * static_prime + value ) % arr_length
    #         i += 1
    #     end
    #     return total
    # end

end