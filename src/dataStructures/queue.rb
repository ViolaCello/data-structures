class Node
    attr_accessor :val, :next

    def initialize(val)
        @val = val
        @next = nil
    end
end

class Queue
    attr_accessor :first, :last, :size

    def initialize
        @first = nil
        @last = nil
        @size = 0
    end

    
end