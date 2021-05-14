class HashTable
    attr_accessor :hash

    def initialize(size = 53)
        @hash = Array.new(size)
    end

    def indexing(key)
        total = 0
        static_prime = 31
        i = 0
        while i < [key.length, 100].min do 
            char = key[i]
            value = char.ord - 96
            total = ( total * static_prime + value ) % @hash.length
            i += 1
        end
        return total.abs()
    end

 
end