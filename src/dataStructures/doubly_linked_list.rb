class Node
    attr_accessor :val, :next, :prev
   def initialize(val)
       @val = val  
       @next = nil
       @prev = nil
   end
end

class DoublyLinkedList
   attr_accessor :head, :tail, :length

   def initialize()
       @head = nil
       @tail = nil
       @length = 0
   end

   def push(val)
    new_node = Node.new(val)
    if @length==0
        @head = new_node
        @tail = new_node
    else 
        @tail.next = new_node
        new_node.prev = @tail
        @tail = new_node
    end
    @length += 1
    return self
   end

   def pop
    return nil if !@head
    old_tail = @tail
    if @length==1
        @head = nil
        @tail = nil
    else 
        @tail = old_tail.prev
        new_tail.next = nil
        old_tail.prev = nil 
    end
    @length -= 1
    return old_tail
   end

   def shift
    return nil if !@head
    old_head = @head
    if @length==1
        @head = nil
        @tail = nil
    else 
        @head = old_head.next
        @head.prev = null
        old_head.next = null
    end
    @length -= 1
    return old_head
   end

   def unshift(val)
    new_node = Node.new(val)
    if @length==0 
        @head = new_node
        @tail = new_node
    else 
        @head.prev = new_node
        new_node.next = @head
        @head = new_node
    end
    @length += 1
    return self
   end

   def get(index)
    return nil if index<0 || index>=@length
    if index<=@length/2
        i = 0
        current = @head
        while i<index do
            current = current.next
            i += 1
        end
    else 
        i = @length - 1
        current = @tail
        while i>index do
            current =  current.prev
            i -= 1
        end
    end
    return current
   end

   def set(index, val) 
    node = get(index)
    if !!node 
        node.val = val
        return true
    else 
        return false
    end
   end

end # end Class