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

    # uses separate chaining 
    def set(key, value)
        index = indexing(key)
        if @hash[index] == nil
            @hash[index] = []
        end
        return true if @hash[index].push([key, value])
    end

    # for debugging purposes
    def print_all
        @hash.map.with_index  { |k, i| puts "At index #{i} is #{k}" }
    end

    def get(key)
        index = indexing(key)
        return false if @hash[index] == nil || @hash[index].length == 0
        i = 0
        while i < @hash[index].length do
            return @hash[index][i][1] if @hash[index][i][0] == key
            i += 1
        end
    end

end