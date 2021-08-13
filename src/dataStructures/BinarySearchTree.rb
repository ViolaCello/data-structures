class Node
    attr_accessor :value, :left, :right

    def initialize(value)
        @value = value
        @left = nil
        @right = nil
    end
end

# BIG O
# Insertion O(log n) = average & best.  Worst is O(n)
# Search O(log n) = average & best.  Worst is O(n)

class BinarySearchTree
    attr_accessor :root

    def initialize
        @root = nil
    end

    def insert(value)
        new_node = Node.new(value)
        if !root
            @root = new_node
            return self
        end
        current = @root
        while current do
            return nil if current.value == value
            if value > current.value
                if !current.right
                    current.right = new_node
                    break
                else 
                    current = current.right
                end
            else 
                if !current.left
                    current.left = new_node
                    break
                else 
                    current = current.left
                end
            end
        end
        return self
    end

    def find(value)
        return false if !@root
        current = @root
        while !!current do
            return true if current.value == value
            if value > current.value
                return false if !current.right
                current = current.right
            else 
                return false if !current.left
                current = current.left
            end
        end
    end

    def breadth_first_search
        queue = []
        result = []
        queue.push(@root)
        while queue.length != 0 do
            dequeued = queue.shift()
            result.push(dequeued)
            queue.push(dequeued.left) if !!dequeued.left
            queue.push(dequeued.right) if !!dequeued.right
        end
        return result
    end

    def depth_first_search_preOrder
        @result = [] # need @ because of scope of helper method
        def travserse(node)
            @result.push(node.value)
            travserse(node.left) if !!node.left
            travserse(node.right) if !!node.right
        end
        travserse(@root)
        return @result 
    end

    def DFS_preorder_memoization(current = self.root, result=[])
        result.push(current.value)
        DFS_preorder_memoization(current.left, result) if !!current.left
        DFS_preorder_memoization(current.right, result) if !!current.right
        return result
    end

    def DFS_postorder_memoization(current = self.root, result = [])
        DFS_postorder_memoization(current.left, result) if !!current.left
        DFS_postorder_memoization(current.right, result) if !!current.right
        result.push(current.value)
        return result
    end


    def depth_first_search_postOrder
        @result = []
        def travserse(node)
            travserse(node.left) if !!node.left
            travserse(node.right) if !!node.right
            @result.push(node.value)
        end
        travserse(@root)
        return @result
    end

    def depth_first_search_in_order
        @result = []
        def travserse(node)
            travserse(node.left) if !!node.left
            @result.push(node.value)
            travserse(node.right) if !!node.right
        end
        travserse(@root)
        return @result
    end


    def find_recursive(value, current = @root)
        return false if !current
        return true if current.value == value
        return find_recursive(value, current.right) if value > current.value
        return find_recursive(value, current.left) if value < current.value
    end

# def delete(value, current = @root)
#     return nil if !current
#     if value < current.value
#         current.left = delete(value, current.left)      
#         elsif 
#             value > current.value
#             current.right = delete(value, current.right)
#         else
#             return current.right if !current.left
#             return current.left if !current.right
#             ## find the maximum value on the left 
#             ## which means, keep travering down the right side
#             right_max = current.left
#             while !!right_max.right do 
#                 right_max = right_max.right
#             end
#             current.left = delete(right_max.value, current.left)
#         end
#     end
#     return true
# end 

def remove(val, current = self.root)
    return nil if !current # tree is empty or we ran out of just_nodes
    if val == current.value # delete this node
      # if delete node has no children
      if !current.left && !current.right
        return nil # meaning, the parent will now point to nil
      elsif # there is only one child of the deleted node
        !current.left
        return current.right
      elsif !current.right
        return current.left
      else # this node has two children, find the smallest node of its right descendents 
        smallest_node = current.right
        while !!smallest_node.left do
          smallest_node = smallest_node.left  
        end 
        current.value = smallest_node.value # move the smallest node of the right side to the spot where we deleted the node, technically, swap its VALUE, not the Node object itself
        current.right = remove(smallest_node.value, current.right) # this line calls this method to delete the node we just found, but at its position that we originally found it, hence, we're calling the "root" of this method the right child of the node we just deleted/replaced
        return current
      end 
    elsif current.value > val
      current.left = remove(val, current.left)
      return current
    else 
      current.right = remove(val, current.right)
      return current
    end 
  end 

end