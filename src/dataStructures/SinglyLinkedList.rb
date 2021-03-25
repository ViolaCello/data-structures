class Node
    attr_accessor :val, :next
   def initialize(val)
       @val = val  
       @next = nil
   end
end

class SinglyLinkedList
   attr_accessor :head, :tail, :length

   def initialize()
       @head = nil
       @tail = nil
       @length = 0
   end

   def push(val)
       new_node = Node.new (val)
       if !@head 
           @head = new_node
           @tail = new_node
       else 
           @tail.next = new_node
           @tail = new_node
       end
       @length += 1
       return self 
   end

   def pop
    if @head==nil
        return nil 
    end
    current = @head
    if current==@tail
      @head = nil
       @tail = nil
       @length = 0
       return current
       current = nil
    end
    while current do 
        new_tail = current
        current = current.next
        if current==@tail
            @tail = new_tail
            @tail.next = nil
            @length -= 1
            if @length<=0
                @head = nil
                @tail = nil
            end
            return current  
        end
    end
   end

   def shift
    if @head==nil
        return nil 
    end 
    old_head = @head
    @head = @head.next
    @length -= 1
    if @length==0
        @tail = nil
    end
   end

   def unshift(val)
    new_node = Node.new (val)
    if !@head
        @head = new_node
        @tail = new_node
    else 
        new_node.next = @head
        @head = new_node
    end
    @length += 1
    return self
   end

   def get(index)
    if index>=@length || index<0 
        return nil
    end
    i = 0
    current_node = @head
    while i<index do
        current_node = current_node.next
        i += 1
    end
    return current_node
   end

   def set(index, val)
    node = get(index)
    if node
        node.val = val
        return true
    end
    return false
   end

   def insert(index, val)
    if index<0 || index>@length 
        return false
    end
    if index==0 
        return !!unshift(val)
    end
    if index==@length
        return !!push(val)
    end
    new_node = Node.new (val)
    prev_node = get(index-1)
    temp = prev_node.next
    prev_node.next = new_node
    new_node.next = temp
    @length += 1
    return true
   end

def remove(index)
    if index<0 || index>@length 
        return nil 
    end
    return shift() if index==0
    return pop() if index==@length-1
    prev_node = get(index-1)
    removed_node = prev_node.next
    prev_node.next = removed_node.next
    return removed_node
end

def reverse
        current_node = @head
        @head = @tail
        @tail = current_node
        prev_node = nil # needs to be nil so first time through loop @tail points to nil
        i = 0
        while i<@length do 
            next_node = current_node.next
            current_node.next = prev_node
            prev_node = current_node
            current_node = next_node
            i += 1
        end
        return self 
end

end # end Class