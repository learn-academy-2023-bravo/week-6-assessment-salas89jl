# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# This is controller used to define what will happend with a method is reached. 

class BlogPostsController < ApplicationController
  def index
    # ---2)
    # @posts is an instance variable used to display all items inside of the BlogPost model.
    @posts = BlogPost.all
  end

  # ---3)
  # show is controller method used to list one elements of the model BlogPost by using the .find and passing params with the id value. 
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # new is controller method used to as a route to shows a form, and is between CRUD: Read & Create.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    # create is a controller method used to add information from the form to the database, and is CRUD: Create. This is accomplished by passing the strong params methods to the .create method to the BlogPost model inside of the instance variable @post. If the criteria is met to redirect to BlogPost.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) 
    # using the instance variable @post to find a particular blog post by passing params as an arguement.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) the controller method .update is used to update a specific blogpost if all the critiria has met throught the strong params as an argument. 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)
      # This will redirect the the information back to the model blog_posts contronller.
      redirect_to blog_posts_path
    end
  end

  # ---9)
  # Methods passed after privates restricts the scope from being called somewhere else in the program. 
  private
  def blog_post_params
    # ---10)
    # These are strong params that are placed to add proctection critiria that will only allow specific information to pass through the method on which it is called. 
    params.require(:blog_post).permit(:title, :content)
  end
end
