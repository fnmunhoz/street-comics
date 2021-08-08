module ComicsApi
  module V1
    module Models
      class ComicsItem

        attr_reader(:id)
        attr_reader(:title)
        attr_reader(:thumbnail)

        def initialize(params)
          @id = params.fetch(:id)
          @title = params.fetch(:title)
          @thumbnail = params.fetch(:thumbnail)
        end
      end

    end
  end
end
