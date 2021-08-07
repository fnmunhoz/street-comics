module ComicsApi
  module V1
    module Models
      class ComicsResponse

        attr_reader(:body)

        def initialize(params)
          @body = params.fetch(:body)
        end
      end

    end
  end
end
